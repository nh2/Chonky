// Import React as you normally would
import React from 'react';

// Import Chonky styles and relevant components
import '../../style/main.css';
import {FileBrowser, FolderView} from '../../src';

// Define a handler for "open file" action
const handleFileOpen = (file) => {
    const type = file.isDir ? 'folder' : 'file';
    alert(`You tried to open a ${type}: ${file.base}`);
};

// Define some files and folders
const readmeFile = {
    id: 'abcd1234',
    name: 'README.md',
    isDir: false,
};
const myFiles = [readmeFile, null];
const parentFolder = {
    id: 'qwer5678',
    name: 'Simple example',
    isDir: true,
};
const folderChain = [parentFolder];

// Render the file browser
const ExampleComponent = () => <FileBrowser files={myFiles} folderChain={folderChain}
                                            onFileOpen={handleFileOpen}
                                            view={FolderView.SmallThumbs}/>;
export default ExampleComponent;
