import React from 'react';
import PropTypes from 'prop-types';

/**
 *
 * the below is for running the example in the context of this repo.
 *
 * for your app, use:
 *
 * import { withGoogleSheets } from 'react-db-google-sheets';
 *
 */
import { withGoogleSheets } from '../../dist';

const EsnersSheet = props => (
    <div>
        {props.db.esners.map(data => (
            <span key={data.id}>
                <p>{data.name} {data.surname} <strong>{data.position}</strong></p>
            </span>
        ))}
    </div>
);

EsnersSheet.propTypes = {
    db: PropTypes.shape({
        esners: PropTypes.arrayOf(PropTypes.object),
    }),
};

export default withGoogleSheets('esners')(EsnersSheet);
