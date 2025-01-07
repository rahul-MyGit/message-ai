import index from "./icons";
import { v4 as uuid } from 'uuid';

export type FieldProps = {
    label: string
    id: string
}

type SideBarProperties  = {
    icon: React.ReactNode
} & FieldProps


const {AutomationDuoToneWhite, HomeDuoToneWhite, RocketDuoToneWhite, SettingsDuoToneWhite} = index()


export const SIDEBAR_MENU: SideBarProperties[] = [
    {
        id: uuid(),
        label: 'home',
        icon: <HomeDuoToneWhite />
    },
    {
        id: uuid(),
        label: 'automations',
        icon: <AutomationDuoToneWhite />
    },
    {
        id: uuid(),
        label: 'integrations',
        icon: <RocketDuoToneWhite />
    },
    {
        id: uuid(),
        label: 'settings',
        icon: <SettingsDuoToneWhite />
    },
]