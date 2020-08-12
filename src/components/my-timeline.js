import React from "react"
import styled from "styled-components"
import theme from "../utils/theme"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "../components/layout/timeline.css"


const TimelineWrapper = styled.div`
  margin: 4rem 0;
`;

const Content = styled.ul`
    display: flex;
    flex-direction: column;
    list-style-type: disc;
`;

const ContentElement = styled.li`
    line-height: initial;
    margin-bottom: 1rem;
`;

const Data = [
  {
    title: 'Umiejętności',
    list: [
      { main: 'HTML' }, { main: 'CSS i SASS' }, { main: 'JavaScript' }, { main: 'React' }, { main: 'Responsiwe Web Design' }, { main: 'Gatsby' }
    ]
  },
  {
    title: 'Doświadczenie',
    list: [
      {
        main: 'Specjalista ds. pozyskiwania nieruchomości',
        sub: 'Metrohouse Kraków'
      },
      {
        main: 'Pośrednik w obrocie nieruchomościami',
        sub: 'Indepro Nieruchomości Kraków'
      }
    ]
  },
  {
    title: 'Języki obce',
    list: [{main:'Język Angielski'}]
  },
  {
    title: 'Wykształcenie',
    list: [
      {
        main: ' Uniwersytet Ekonomiczny, Kraków',
        sub: ' Gospodarka i administracja publiczna'
      },
      {
        main: 'Gregory & Monsters, Kraków',
        sub: 'Front-End Developer, Nauka programowania od podstaw'
      },
      {
        main: 'Kodilla, Kraków',
        sub: 'Web Developer, Kurs budowania stron i interfejsów aplikacji internetowych'
      },
      {
        main: 'Coders Lab, Kraków',
        sub: 'JavaScript Developer: React, Tworzenie stron i aplikacji webowych przy użyciu najpopulrniejszej biblioteki języka JavaScript'
      },
    ]
  },
  {
    title: 'Zainteresowania',
    list: [
      {main:'enologia'}, {main:'literatura fantasy'}, {main:'kino science fiction'}, {main:'nowe technologie'}, {main:'rynek nieruchomości'}
    ]
  },
];

const Timeline = () => {
  return (
    <TimelineWrapper>
      <VerticalTimeline>
        {
          Data.map(elem =>
            <VerticalTimelineElement key={elem.title}
              className="vertical-timeline-element--content"
              iconStyle={{ background: `${theme.colors.lime}`, color: `${theme.colors.white}` }}
              date={elem.title}
            >
              <Content>
                {
                  elem.list.map(skill =>
                    <ContentElement key={skill.main}>
                      {skill.main} <br /> {skill.sub}
                    </ContentElement>
                  )
                }
              </Content>
            </VerticalTimelineElement>
          )
        }
      </VerticalTimeline>
    </TimelineWrapper>
  )
};

export default Timeline

