export interface InboxThread {
     id: string;
     subject: string;
     sender: string;
     snippet: string;
     unread: boolean;
     starred: boolean;
     timestamp: string;
}

export interface InboxMessage {
     id: string;
     threadId: string;
     subject: string;
     from: string;
     body: string;
     timestamp: string;
     unread: boolean;
     starred: boolean;
}

export interface InboxThreadDetail {
     id: string;
     subject: string;
     participants: string[];
     messages: InboxMessage[];
}