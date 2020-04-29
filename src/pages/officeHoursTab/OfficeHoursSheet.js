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

const OfficeHoursSheet = props => (
    <div>
        {props.db.officeHours.map(data => (
            <span key={data.id}>
                <p>{data.day} {data.hour} <strong>{data.who}</strong></p>
            </span>
        ))}
    </div>
);

OfficeHoursSheet.propTypes = {
    db: PropTypes.shape({
        officeHours: PropTypes.arrayOf(PropTypes.object),
    }),
};

export default withGoogleSheets('officeHours')(OfficeHoursSheet);
