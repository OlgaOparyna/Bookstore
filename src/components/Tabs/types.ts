export enum TabsNames {
    SIGNIN,
    SIGNUP,
    Description,
    Authors,
}
export type TabsProps = {
    tabsListArray: TabsType[];
    activeTab: number;
    onClick: (key: TabsNames)=>()=> void;
    tabsClassName?: string;
}
export type TabsType = {
    title: string;
    key: TabsNames,
}