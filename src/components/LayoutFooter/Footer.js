/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

import Container from 'components/Container';
import ExternalFooterLink from './ExternalFooterLink';
import FooterLink from './FooterLink';
import FooterNav from './FooterNav';
import MetaTitle from 'templates/components/MetaTitle';
import SectionLinks from './SectionLinks';
import React from 'react';
import {colors, media} from 'theme';
import {sectionListCommunity, sectionListDocs} from 'utils/sectionList';

// $FlowFixMe
import navFooter from '../../../content/footerNav.yml';

import ossLogoPng from 'images/oss_logo.png';

const Footer = ({layoutHasSidebar = false}: {layoutHasSidebar: boolean}) => (
  <footer
  dir="rtl"
    css={{
      backgroundColor: colors.darker,
      color: colors.white,
      paddingTop: 10,
      paddingBottom: 50,

      [media.size('sidebarFixed')]: {
        paddingTop: 40,
      },
      '@media print': {
        display: 'none',
      },
    }}>
    <Container>
      <div
        css={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',

          [media.between('small', 'medium')]: {
            paddingLeft: layoutHasSidebar ? 240 : null,
          },

          [media.between('large', 'largerSidebar')]: {
            paddingLeft: layoutHasSidebar ? 280 : null,
          },
          [media.between('largerSidebar', 'sidebarFixed', true)]: {
            paddingLeft: layoutHasSidebar ? 380 : null,
          },
        }}>
        <div
          css={{
            flexWrap: 'wrap',
            display: 'flex',

            [media.lessThan('large')]: {
              width: '100%',
            },
            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3 * 2)',
              paddingRight: 40,
            },
          }}>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>دۆكس</MetaTitle>
            {sectionListDocs.map(section => {
              const defaultItem = section.items[0];
              return (
                <FooterLink
                  to={`/docs/${defaultItem.id}.html`}
                  key={section.title}>
                  {section.title}
                </FooterLink>
              );
            })}
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>كه‌ناڵه‌كان</MetaTitle>
            <ExternalFooterLink
              href="https://github.com/facebook/react"
              target="_blank"
              rel="noopener">
              گیتهه‌ب
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://stackoverflow.com/questions/tagged/reactjs"
              target="_blank"
              rel="noopener">
              ستاك ئۆڤه‌رفلۆ
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://discuss.reactjs.org"
              target="_blank"
              rel="noopener">
              مه‌كۆی گفتوگۆ
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://discord.gg/0ZcbPKXt5bZjGY5n"
              target="_blank"
              rel="noopener">
              چاتی ریاكتیفڵه‌كس
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://dev.to/t/react"
              target="_blank"
              rel="noopener">
              كۆمه‌ڵگه‌ی په‌ره‌پێده‌ران
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://www.facebook.com/react"
              target="_blank"
              rel="noopener">
              فه‌یسبووك
            </ExternalFooterLink>
            <ExternalFooterLink
              href="https://twitter.com/reactjs"
              target="_blank"
              rel="noopener">
              تویته‌ر
            </ExternalFooterLink>
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>مه‌كۆ</MetaTitle>
            <MetaTitle onDark={true}>{navFooter.channels.title}</MetaTitle>
            <SectionLinks links={navFooter.channels.items} />
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>{navFooter.community.title}</MetaTitle>
            <ExternalFooterLink
              href={`https://github.com/facebook/react/blob/master/CODE_OF_CONDUCT.md`}>
              Code of Conduct
            </ExternalFooterLink>
            {sectionListCommunity.map(section => (
              <FooterLink
                to={`/community/${section.items[0].id}.html`}
                key={section.title}>
                {section.title}
              </FooterLink>
            ))}
          </FooterNav>
          <FooterNav layoutHasSidebar={layoutHasSidebar}>
            <MetaTitle onDark={true}>زیاتر</MetaTitle>
            <FooterLink to="/tutorial/tutorial.html">فێركاری</FooterLink>
            <FooterLink to="/blog/">بلۆگ</FooterLink>
            <FooterLink to="/acknowledgements.html">
              رێزگرتن
            </FooterLink>
            <ExternalFooterLink
              href="https://facebook.github.io/react-native/"
              target="_blank"
              rel="noopener">
              ریاكت نه‌یتڤ
            </ExternalFooterLink>
            <MetaTitle onDark={true}>{navFooter.more.title}</MetaTitle>
            <SectionLinks links={navFooter.more.items} />
          </FooterNav>
        </div>
        <section
          dir="ltr"
          css={{
            paddingTop: 40,
            display: 'block !important', // Override 'Installation' <style> specifics
            paddingLeft: 40,

            [media.greaterThan('xlarge')]: {
              width: 'calc(100% / 3)',
              order: -1,
            },
            [media.greaterThan('large')]: {
              order: -1,
              width: layoutHasSidebar ? null : 'calc(100% / 3)',
            },
            [media.lessThan('large')]: {
              textAlign: 'center',
              width: '100%',
              paddingTop: 40,
            },
          }}>
          <a
            href="https://code.facebook.com/projects/"
            target="_blank"
            rel="noopener">
            <img
              alt="Facebook Open Source"
              css={{
                maxWidth: 160,
                height: 'auto',
              }}
              src={ossLogoPng}
            />
          </a>
          <p
            css={{
              color: colors.subtleOnDark,
              paddingTop: 15,
            }}>
             © 2018 Facebook Inc.{' '}
            <span
              css={{
                display: layoutHasSidebar ? 'none' : 'inline-block',
              }}>
              هه‌موو مافێكی پارێزراوه‌
            </span>
          </p>
        </section>
      </div>
    </Container>
  </footer>
);

export default Footer;
