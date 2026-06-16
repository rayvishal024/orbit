import { auth } from "@/auth";

import { getThreads } from "@/lib/gmail";
import { getSentThreads } from "@/lib/gmail";
// import { getStarredThreads } from "@/lib/gmail";
// import { getTrashThreads } from "@/lib/gmail";
import { getThread } from "@/lib/gmail";

import { InboxLayout } from "@/components/inbox/inbox-layout";
import { ThreadList } from "@/components/inbox/thread-list";
import { ThreadView } from "@/components/inbox/thread-view";

interface Props {
  searchParams: Promise<{
    folder?: string;
    thread?: string;
  }>;
}

export default async function MailPage({
  searchParams,
}: Props) {
  const session = await auth();

  if (!session?.user?.id) {
    return null;
  }

  const { folder = "inbox", thread } =
    await searchParams;

  let threads;

  switch (folder) {
    case "sent":
      threads = await getSentThreads(
        session.user.id
      );
      break;

    // case "starred":
    //   threads = await getStarredThreads(
    //     session.user.id
    //   );
    //   break;

    // case "trash":
    //   threads = await getTrashThreads(
    //     session.user.id
    //   );
    //   break;

    default:
      threads = await getThreads(
        session.user.id
      );
  }

  let selectedThread = null;

  if (thread) {
    selectedThread = await getThread(
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
          basePath={`/mail?folder=${folder}`}
        />
      }
      threadView={
        <ThreadView
          thread={selectedThread}
        />
      }
    />
  );
}