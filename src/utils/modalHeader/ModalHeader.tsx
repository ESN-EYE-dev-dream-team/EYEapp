import React from 'react';

import './ModalHeader.scss';

export default function ModalHeader({ onClickHandler }: { onClickHandler: Function }) {
    return (
        <div className="top-bar">
            <img
                alt="Icon back"
                className="icon-back"
                src="assets/ornaments/icon-back-white.png"
                onClick={() => onClickHandler()}
            />
        </div>
    );
}
