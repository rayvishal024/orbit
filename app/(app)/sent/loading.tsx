
export default function SentLoading() {
     return (
          <div className="flex h-full flex-col items-center justify-center gap-4">
               <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />

               <p className="text-sm text-muted-foreground">
                    Loading Sent...
               </p>
          </div>
     );
}