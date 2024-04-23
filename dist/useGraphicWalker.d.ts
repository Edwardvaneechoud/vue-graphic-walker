import { IGWProps } from "@kanaries/graphic-walker";
import { Ref } from "vue";
export declare function useGraphicWalker(el: Ref<HTMLElement>, props?: IGWProps | undefined): {
    render: () => void;
};
