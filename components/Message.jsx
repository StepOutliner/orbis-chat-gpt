import { Orbis, useOrbis, UserPfp } from "@orbisclub/components";
import { OrbisLogo } from "./Icons";

/** For Markdown support */
import { marked } from 'marked';

export default function Message({message, sent}) {
  const { orbis, user } = useOrbis();
  if(sent) {
    return(
      <div className="ml-[40%] p-3 rounded-lg">
         <div className="flex items-center justify-start flex-row-reverse">
            <UserPfp details={user} />
            <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 border border-indigo-300 rounded-xl space-y-3 message-content" dangerouslySetInnerHTML={{__html: marked.parse(message.content)}}></div>
         </div>
      </div>
    )
  } else {
    return(
      <div className="col-start-1 col-end-8 p-3 rounded-lg max-w-[60%]">
         <div className="flex flex-row items-center">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
              <OrbisLogo width="21" height="28" />
            </div>
            <div className="relative ml-3 text-sm bg-white py-2 px-4 border border-slate-200 rounded-xl space-y-3 message-content" dangerouslySetInnerHTML={{__html: marked.parse(message.content)}}></div>
         </div>
      </div>
    );
  }

}