import React from 'react';

import './ModalHeader.scss';

export default function ModalHeader({ onClickHandler }: { onClickHandler: Function }): JSX.Element {
    return (
        <div className="top-bar margin-bottom-event">
            <img
                alt="Icon back"
                className="icon-back"
                src="assets/ornaments/icon-back-white.png"
                onClick={() => onClickHandler()}
            />
        </div>
    );
}
