interface Props {
     threadList: React.ReactNode;
     threadView: React.ReactNode;
}

export function InboxLayout({
     threadList,
     threadView,
}: Props) {
     return (
          <div className="h-full grid grid-cols-[380px_1fr]">
               <div className="border-r">
                    {threadList}
               </div>

               <div>
                    {threadView}
               </div>
          </div>
     );
}