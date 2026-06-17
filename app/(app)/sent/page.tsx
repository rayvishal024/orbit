import { auth } from "@/auth";

import { InboxLayout } from "@/components/inbox/inbox-layout";
import { ThreadList } from "@/components/inbox/thread-list";
import { ThreadView } from "@/components/inbox/thread-view";

import {
  getSentThreads,
  getThread,
} from "@/lib/gmail";

type Props = {
  searchParams: Promise<{
    thread?: string;
  }>;
};

export default async function SentPage({
  searchParams,
}: Props) {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const threads = await getSentThreads(
    session.user.id
  );

  const { thread } =
    await searchParams;

  let selectedThread = null;

  if (thread) {
    selectedThread =
      await getThread(
        session.user.id,
        thread
      );
  }

  return (
    <InboxLayout
      
      threadList={
        <ThreadList
          threads={threads}
          selectedThreadId={thread}
          basePath="/sent"
        />
      }
      threadView={
        <ThreadView
          thread={
            selectedThread
          }
        />
      }
    />
  );
}