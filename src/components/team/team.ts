import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TopBannerComponent } from "../top-banner/top-banner.component";

@Component({
  selector: 'app-team',
  imports: [CommonModule, TopBannerComponent],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class Team {
teamMembers = [
  {
    name: 'Alex',
    role: 'Director',
    bio: 'Alex has had a long career in helping others and worked in public services for fifteen years before starting the company. She has extensive experience in working with people who suffer from mental health, hoarding disorders, ADHD and autism. Organising is Alex’s passion and she has a natural ability to create visions in her head for your spaces and bring them to life.',
    areas: 'Kent and London',
    image: 'assets/team/10003.jpeg'
  },
  {
    name: 'Lorraine',
    role: 'Business Development Manager',
    bio: 'Lorraine has had a long career in public service and has developed her skills in multi-tasking, problem solving and organising. Lorraine loves to help others and has a passion for people. She is a qualified counsellor who has a natural ability to put people at ease.',
    areas: 'Kent and London',
    image: 'assets/team/10004.jpeg'
  },
  {
    name: 'Rich',
    role: '',
    bio: 'Rich worked as a delivery driver prior to starting with the company and has been with the company for over a year. Rich is an avid gardener and loves home cinemas. His attention to detail is exceptional and he has a fantastic ability to create space from very little! His nickname is “The Magician”.',
    areas: 'Kent and London',
    image: 'assets/team/10005.jpeg'
  },
  {
    name: 'Jenny',
    role: '',
    bio: 'Jenny has lived in America for over twenty years before recently moving back to the UK to spend more time with her family. Jenny has over thirty years of experience in nursing and has had a long career in helping others. Jenny has strong organisational and problem-solving skills from her nursing career which she now brings to professional organising.',
    areas: 'Wales and the North East',
    image: 'assets/team/10006.jpeg'
  },
  {
    name: 'James',
    role: '',
    bio: 'Originally born in the US but now living in the UK, James has over thirty years of experience in business management and building and renovation projects before coming on board as a professional organiser. He has an eye for detail and a strong ability to multi-task and problem-solve.',
    areas: 'Wales and the North East',
    image: 'assets/team/10007.jpeg'
  },
  {
    name: 'Ian',
    role: '',
    bio: 'Ian has had a diverse career, including 17 years in distribution and 15 of those with management. He has run his own business as a driving instructor and car valeting but is moving on to find a new challenge and is now working with the company to help people and make a difference. Outside of work, his passions are walking, golf and camping in his old VW campervan.',
    areas: 'Kent and London',
    image: 'assets/team/10008.jpg'
  },
  {
    name: 'Tanya',
    role: '',
    bio: 'Tanya has been a professional organiser for over 2 years now, however it has been something she has been passionate about her whole life. Although she enjoys the challenge of tackling any room in a home, her previous career in early years education has given her a great insight in to children’s environments and she is able to use that experience to create rooms tailored to individual children’s needs that will help them to develop the skills they require as they grow into adult life.',
    areas: 'London and Kent',
    image: 'assets/team/10009.png'
  },
  {
    name: 'Millie',
    role: '',
    bio: 'Millie loves the positivity and calmness that organisation brings to a home and mind. Her strength in assisting with decision making and creating order can help make you feel at ease through the whole process. Working with patience and understanding, Millie will tackle the decluttering step by step and restore order to your home.',
    areas: 'London',
    image: 'assets/team/10011.jpeg'
  },
  {
    name: 'Derek',
    role: '',
    bio: 'Derek has worked for a number of years in teaching therefore is patient and has a natural ability to problem solve. Derek is now transferring those skills into professional organising and loves it! Derek has a passion for helping others and loves the job satisfaction he gets at the end of the day in seeing the difference he is making to people.',
    areas: 'London and Kent',
    image: 'assets/team/10022.jpeg'
  },
  {
    name: 'Zanelle',
    role: '',
    bio: 'Zanelle has a love and passion for organising, for many years she worked in children’s centres always found herself organising everything. She decided to become a full time organiser when her children left home. She has been working as a professional organiser for 2 years now and absolutely loves changing people’s lives and working with like minded people.',
    areas: 'London',
    image: 'assets/team/10023.jpeg'
  },
  {
    name: 'Lara',
    role: '',
    bio: 'Lara’s background is working in local councils managing the short term placement service for vulnerable young people. Patient, empathetic and understanding, you are in safe hands with Lara. Lara loves to organise and declutter spaces and gets a real sense of satisfaction from being able to help people.',
    areas: 'Kent and London',
    image: 'assets/team/10012.jpeg'
  },
  {
    name: 'Connor',
    role: '',
    bio: 'Connor is a big softy! He has years of experience working in the public/charity sectors and is experienced at working with people who suffer with mental health disorders. Connor loves to work in the garden and transform people’s homes and is naturally caring to his previous job role. Connor loves relaxing in his spare time after a day’s work playing his two instruments or two.',
    areas: 'Kent and London',
    image: 'assets/team/10013.jpeg'
  },
  {
    name: 'Glyn',
    role: '',
    bio: 'Glyn had a career in education spanning over 35 years in which he demonstrated a range of skills meeting the diverse needs of students, parents & staff. He takes great pride in “making a difference” and now transfers those attributes to this role. He is a very good organiser and loves his job. There is no greater satisfaction than helping people to move forward & creating positive outlooks for his clients. He lived in Australia for over 20 years before recently returning to the UK to spend time with his elderly mum. He is very passionate about sport but is more inclined to spectating than playing nowadays.',
    areas: 'Kent and London',
    image: 'assets/team/10014.jpg'
  },
  {
    name: 'Annie',
    role: '',
    bio: 'Annie has a passion for helping others and staying organised. After years of teaching, she realised her favourite part was creating calm from chaos. She’s now bringing that skill to new adventures, using her experience to support people, solve problems and make life a little easier, one task at a time.',
    areas: 'Kent and London',
    image: 'assets/team/10015.png'
  }
];

  
}
