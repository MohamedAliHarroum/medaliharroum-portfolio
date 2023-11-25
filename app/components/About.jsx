'use client'

import {DevImg} from './DevImg';
import Image from 'next/image';
import {Tabs, TabsContent, TabsList,TabsTrigger} from '../components/ui/tabs';
import  {
User2, MailIcon, HomeIcon, PhoneCall, GraduationCap,Calendar, Briefcase
} from 'lucide-react';

const infoData = [
    {icon : <User2 size={20} />,
     text : 'Mohamed Ali Harroum' ,
    },
    {icon : <PhoneCall size={20} />,
        text : '+21625041852' ,
    },
    {icon : <MailIcon size={20} />,
        text : 'mohamedali.harroum@gmail.com' ,
    },
    {icon : <Calendar size={20} />,
        text : 'Born on 23 Aug , 1999' ,
    },
    {icon : <GraduationCap size={20} />,
        text : 'Master on Computer Science' ,
    },
    {icon : <HomeIcon size={20} />,
        text : 'Sahline Monastir' ,
    },

];
const  qualificationData = [
    {
        title:'education',
        data:[
            {
            university : 'ISIMM',
            qualification: 'Bachelor of Science',
            years:'2018-2021',
            },
            {
                university : 'ISIMM',
                qualification: 'Master of Science',
                years:'2021-2023',
            }
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company : 'Satoripop',
                qualification:'Developer',
                years :'2023-02 - 2023-09'
            },
            {
                company : 'Exist-it',
                qualification:'Developer',
                years :'2021-02 - 2021-06'
            }
        ]
    }
];

const  skillsData =[
    {
        title:'tools',
        data: [
            {
                imgPath:'/about/vscode.svg',

            },
            {
                imgPath:'/about/developer.svg',

            },
            {
                imgPath:'/about/notion.svg',

            },
            {
                imgPath:'/about/springio-icon.svg',

            },
            {
                imgPath:'/about/angular.svg',

            },
            {
                imgPath:'/about/shape-dark.svg',

            },
            {
                imgPath:'/about/shape-light.svg',

            },
        ]
    }
];
export  const  About = () => {
    const getData= (arr,title) => {
        return arr.find((item) => item.title === title );
    };
    return (
        <section className="xl:h-[860px] pb-12 xl:py-24" >
            <div className="container mx-auto" ></div>
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                About me
            </h2>
            <div className="flex flex-col xl:flex-row">
                {/*image*/}
                <div className="hidden xl:flex flex-1 relative ml-10">
                    <DevImg  containerStyles='bg-about_shape_light dark:bg-about_shape_dark
                    w-[521px] h-[521px] bg-no-repeat relative  ' imgSrc='/about/img.png'/>
                </div>
                {/*tabs*/}
                <div className="flex-1">
                    <Tabs>
                        <TabsList defaultValue='personal'>
                            <TabsTrigger value='personal'>Personal Info</TabsTrigger>
                            <TabsTrigger  value='qualifications'>Qualifications</TabsTrigger>
                            <TabsTrigger value='skills'>Skills</TabsTrigger>
                        </TabsList>
                        {/* tabs content */}
                        <div className="text-lg mt-12 xl:mt-8">
                            {/*personal*/}
                            <TabsContent value='personal'>personal info</TabsContent>
                            {/*qualifications*/}
                            <TabsContent value='qualifications'>qualifications</TabsContent>
                            {/*skills*/}
                            <TabsContent value='skills'>skills</TabsContent>
                        </div>
                    </Tabs>
                </div>
            </div>

        </section>
    );
};

