import { asHTML } from "@prismicio/helpers";
import { getSession } from "next-auth/react";
import Head from "next/head";

import { createClient } from "../../services/prismicio";

import styles from './post.module.scss';

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post ({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Ignews</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div 
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps = async ({ req, params, previewData }) => {
  const session = await getSession({ req });
  const { slug } = params;

  // if (!session) {

  // }

  const client = createClient({ previewData });

  const response = await client.getByUID('posts', slug, {});

  const post = {
    slug,
    title: response.data.title,
    content: asHTML(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    }),
  }

  return {
    props: {
      post,
    }
  }
}