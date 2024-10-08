// https://icon-sets.iconify.design/svg-spinners/bars-scale-fade/

import React from 'react';
import type { SVGProps } from 'react';

export function BarsLoading(props: SVGProps<SVGSVGElement>) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
            <rect width={6} height={14} x={1} y={4} fill="currentColor">
                <animate
                    id="svgSpinnersBarsScaleFade0"
                    fill="freeze"
                    attributeName="y"
                    begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
                    dur="0.75s"
                    values="1;5"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="height"
                    begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
                    dur="0.75s"
                    values="22;14"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="opacity"
                    begin="0;svgSpinnersBarsScaleFade1.end-0.25s"
                    dur="0.75s"
                    values="1;0.2"
                ></animate>
            </rect>
            <rect
                width={6}
                height={14}
                x={9}
                y={4}
                fill="currentColor"
                opacity={0.4}
            >
                <animate
                    fill="freeze"
                    attributeName="y"
                    begin="svgSpinnersBarsScaleFade0.begin+0.15s"
                    dur="0.75s"
                    values="1;5"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="height"
                    begin="svgSpinnersBarsScaleFade0.begin+0.15s"
                    dur="0.75s"
                    values="22;14"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="opacity"
                    begin="svgSpinnersBarsScaleFade0.begin+0.15s"
                    dur="0.75s"
                    values="1;0.2"
                ></animate>
            </rect>
            <rect
                width={6}
                height={14}
                x={17}
                y={4}
                fill="currentColor"
                opacity={0.3}
            >
                <animate
                    id="svgSpinnersBarsScaleFade1"
                    fill="freeze"
                    attributeName="y"
                    begin="svgSpinnersBarsScaleFade0.begin+0.3s"
                    dur="0.75s"
                    values="1;5"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="height"
                    begin="svgSpinnersBarsScaleFade0.begin+0.3s"
                    dur="0.75s"
                    values="22;14"
                ></animate>
                <animate
                    fill="freeze"
                    attributeName="opacity"
                    begin="svgSpinnersBarsScaleFade0.begin+0.3s"
                    dur="0.75s"
                    values="1;0.2"
                ></animate>
            </rect>
        </svg>
    );
}
