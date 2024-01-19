export type TMenu = {
    level: number;
    title: string;
    icon?: string;
    disabled?: boolean;
    route?: string;
    permissions?: string[];
    children?: TMenu[];
}
