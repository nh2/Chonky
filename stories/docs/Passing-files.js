// Import React as you normally would
import React from 'react';

// Import Chonky styles and relevant components
import '../../style/main.css';
import {FileBrowser, FolderView} from '../../src';

// Define a handler for "open file" action
const handleFileOpen = (file) => {
    const type = file.isDir ? 'folder' : 'file';
    alert(`You tried to open a ${type}:  ${file.base}`);
};

const files = [
    null,
    null,
    {
        id: 'zxc',
        name: 'Hidden file.mp4',
        isDir: false,
        isHidden: true,
        size: 890,
    },
    {
        id: 'bnm',
        name: 'Normal folder',
        isDir: true,
        childrenIds: ['random-id-1', 'random-id-2']
    },
    {
        id: 'vfr',
        name: 'Symlink folder',
        isDir: true,
        isSymlink: true,
    },
    {
        id: 'qwe',
        name: 'Not selectable.tar.gz',
        ext: '.tar.gz',
        isDir: false,
        selectable: false,
        size: 54300000000,
        modDate: new Date(),
    },
    {
        id: 'rty',
        name: 'Not openable.pem',
        isDir: false,
        openable: false,
        size: 100000000,
    },
];

// Render the file browser
const ExampleComponent = () => <FileBrowser files={files}
                                            onFileOpen={handleFileOpen}
                                            view={FolderView.SmallThumbs}/>;
export default ExampleComponent;
