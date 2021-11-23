import React, { forwardRef } from "react";

export const ProgressBar = () => {
    return (
        <div className="fixed bottom-0 z-20 w-full">
            <div className="overflow-hidden h-2 text-xs flex bg-blue-200">
                <div className="shadow-none flex w-1/3 flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
            </div>
        </div>
    );
}

export const ProgressBarWithRef = forwardRef<HTMLDivElement>(
    (props, ref) => {
        return (
            <div className="fixed bottom-0 z-20 w-full" ref={ref}>
                <div className="overflow-hidden h-2 text-xs flex bg-blue-200">
                    <div className="shadow-none flex w-1/3 flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                </div>
            </div>
        );
    } 
);

export const ProgressBarMemoised = React.memo( ProgressBar )

export const ProgressBarWithRefMemoised = React.memo( ProgressBarWithRef );