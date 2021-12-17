import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import { DirectoryMenu } from './directory.styles';
import { useSelector } from 'react-redux';
import { selectDirectorySections } from '../../redux/directory/directory.selectors';

const Directory = () => {
    const sections = useSelector(selectDirectorySections);
    return (
        <DirectoryMenu>
            {sections.map(({ id, ...sectionProps }) => (
                <MenuItem key={id} {...sectionProps} />
            ))}
        </DirectoryMenu>
    );
};

export default Directory;
