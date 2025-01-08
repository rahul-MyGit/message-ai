import AutomationsCrumb from "@/components/global/automations/AutomationsCrumb";
import { WarningSymbol } from "@/components/WarningSymbol";

type MetaDataProps = {
    params: { id: string}
}

export default async function generateMetadata({params} : MetaDataProps) {
    //fetch user data and also set some meta data    
    return (
        <div className="flex flex-col items-center gap-y-20">
            <AutomationsCrumb id={params.id} />
            <div className="w-full lg:w-10/12 xl:w-6/12 p-5 rounded-xl flex flex-col bg-[#1D1D1D] gap-y-3">
                <div className="flex gap-x-2">
                    <WarningSymbol />
                    When...
                </div>
                {/* TODO: Some kind of trigger  */}
            </div>
        </div>
    )
}