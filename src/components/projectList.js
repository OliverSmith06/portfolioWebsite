import React from 'react';
// import BackgroundImage from '../img/test.png';

/** 
 * TODO replace with api data
*/

export const projectList = [
    {
        icon: 'widgets',
        title: 'Valorant Go! Knife',
        subject: '3D Modelling',
        lastOpened: '20/07/2021',
        components:
            [
                {
                    type: 'largeTile',
                    content: 'In this project my aim was to use SolidWorks to create a replica of an item out of a game. In this case, I wanted to create a a model of the Valorant Go! Knife knife out of the FPS Valorant. Recently (11/09/2021) I bought a 3D printer with the intention of using the printer to not only practice my 3D modelling skills through projects like this but also to create unique prints for family and friends when needed',
                },
                {
                    type: 'mediumImg',
                    path: '/images/val_knife.png',
                    content: 'test',
                },
                {
                    type: 'mediumTile',
                    content: 'When creating the Valorant Go! Knife my idea was to split the object in to 3 distinct parts: the hilt, ring, and blade. I did this as it would make it a lot easier to change these specific components without effected the attributes of the other components',
                },
                // {
                //     type: 'normal',
                //     "content": "<h2 id=\"foo\"> Header with ID property</h2>",
                // },
            ],
    },
    {
        icon: 'mic',
        title: 'Starting with Speechy',
        subject: 'Speechy',
        lastOpened: '15/07/2021',
        components: 
                [
                    {
                        type: 'largeTile',
                        content: 'In this project my aim was to create a python program wherein I could control simple processes on my computer using my voice. When creating the project, my intention was for to have different funcitons located in discrete files so that I could easily implement new features. I used multithreading so that while one thread of the program is processing the audio from my voice, another stream would be collecting the audio. This is due to the google API only either recording or processing voice but unable to do both at the same time'
                    },
                ],

    },
    {
        icon: 'computer',
        title: 'This Website',
        subject: 'Web Development',
        lastOpened: '12/07/2021',
        components: 
                [
                    {
                        type: 'largeTile',
                        content: "This page is showing you how I made the website that you're looking at right now! The first step of me creating this website was to figure out how react worked itself. The first thing I figured out was how to create a static website using react. I learnt the in's and out's of how react components worked and how to create my own to create the home page. At the point of writing (11/09/2021) the only funcitonality in the website is the ability to click on the featured projects. Once the home page was done, I then had to figure out how routing worked so I can go inbetween different posts."
                    },
                    {
                        type: 'mediumImg',
                        path: '/images/react.png',
                    },
                ],
    },
    
];