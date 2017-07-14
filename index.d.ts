import * as React from 'react';

export interface ReactBootstrapSliderProps {
    min?: number;
    max?: number;
    step?: number;
    value: number | number[],
    disabled?: string,
    tooltip?: string,
    change?: Function,
    rtl?: boolean,
    handleChange?: Function,
    slideStop?: Function
}

declare class ReactBootstrapSlider extends React.Component<ReactBootstrapSliderProps, any> {

}

export default ReactBootstrapSlider;