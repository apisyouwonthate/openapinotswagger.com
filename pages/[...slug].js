import { promises as fs } from 'fs';
import path from 'path';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import matter from 'gray-matter';
import glob from 'fast-glob';

import Code from '@components/Code';

const components = { code: Code };

export default function Data({ mdxSource, frontMatter }) {
  return (
    <div>
      <h1>{frontMatter.title}</h1>
      <MDXRemote {...mdxSource} components={components} />
    </div>
  );
}

// This glob is what will be used to generate static routes
const contentPath = 'src/data';
export const contentGlob = `${contentPath}/**/*.mdx`;
export const getFileSlug = (filePath) => {
  const filename = filePath.replace(`${contentPath}/`, '');
  const slug = filename.replace(new RegExp(path.extname(filePath) + '$'), '');
  return slug;
};

export async function getStaticPaths() {
  const files = glob.sync(contentGlob);

  const paths = files.map((file) => {
    return {
      params: {
        slug: getFileSlug(file).split('/'),
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const files = glob.sync(contentGlob);

  const pathRegex = new RegExp(`^${contentPath}/${path.join(...slug)}.mdx$`);
  const fullPath = files.find((file) => pathRegex.test(file));

  if (!fullPath) {
    console.warn('No MDX file found for slug');
  }

  const mdxSource = await fs.readFile(fullPath);
  const { content, data } = matter(mdxSource);

  const mdx = await serialize(content, { components, scope: data });

  return {
    props: {
      mdxSource: mdx,
      frontMatter: data,
    },
  };
}
