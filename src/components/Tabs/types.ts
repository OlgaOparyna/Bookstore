export enum TabsNames {
    SIGNIN,
    SIGNUP,
    Description,
    Authors,
    Reviews
}
export type TabsProps = {
    tabsListArray: TabsType[];
    activeTab: number;
    onClick: (key: TabsNames)=>()=> void;
}
export type TabsType = {
    title: string;
    key: TabsNames,
}