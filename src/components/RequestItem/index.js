import React from 'react';
import PropTypes from 'prop-types';
import JSONInput from 'react-json-editor-ajrm';
import { Checkbox, Row, Container } from './styled';
import { Field } from '../Field';
import statusTextMap from '../../utils/statusMap';

const statusCodes = Object.keys(statusTextMap);

export const RequestItem = ({
    url,
    skip,
    method,
    status,
    response,
    onToggle,
    onStatusChange,
    onResponseChange,
}) => {
    return (
        <Container>
            <Row>
                <Field label="URL"> {url} </Field>
                <Field label="Enable mock">
                    <Checkbox
                        type="checkbox"
                        checked={!skip}
                        onChange={onToggle}
                    />
                </Field>
            </Row>
            <Row>
                <Field label="Method"> {method} </Field>
                <Field label="Status">
                    <select onChange={onStatusChange}>
                        {statusCodes.map((option) => (
                            <option
                                key={option}
                                selected={option == status.toString()}
                            >
                                {option}
                            </option>
                        ))}
                    </select>
                </Field>
            </Row>

            <Field label="Response">
                <JSONInput
                    onBlur={onResponseChange}
                    placeholder={response}
                    colors={{
                        default: 'black',
                        background: 'white',
                        string: 'black',
                        number: 'black',
                        colon: 'black',
                        keys: 'black',
                        error: 'black',
                    }}
                    style={{
                        warningBox: {
                            background: 'white',
                        },
                    }}
                    waitAfterKeyPress={1000}
                    height="120px"
                />
            </Field>
        </Container>
    );
};

RequestItem.propTypes = {
    url: PropTypes.string,
    skip: PropTypes.bool,
    method: PropTypes.string,
    status: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    response: PropTypes.object,
    onToggle: PropTypes.func,
    onStatusChange: PropTypes.func,
    onResponseChange: PropTypes.func,
};