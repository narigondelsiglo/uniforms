import React            from 'react';
import classnames       from 'classnames';
import {connectField}   from 'uniforms';
import {filterDOMProps} from 'uniforms';

const ListAdd = ({
    addIcon,
    className,
    disabled,
    parent,
    value,
    ...props
}) => {
    const limitNotReached = !disabled && !(parent.maxCount <= parent.value.length);

    return (
        <section
            className={classnames('badge pull-right', className)}
            onClick={() => limitNotReached && parent.onChange(parent.value.concat([value]))}
            {...filterDOMProps(props)}
        >
            {addIcon}
        </section>
    );
};

ListAdd.defaultProps = {
    addIcon: <i className="glyphicon glyphicon-plus" />
};

export default connectField(ListAdd, {includeParent: true, initialValue: false});
