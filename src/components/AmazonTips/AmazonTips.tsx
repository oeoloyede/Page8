import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './AmazonTips.module.css';
import { ChatIcon } from './ChatIcon';
import { HomeIcon } from './HomeIcon';
import { ProfileIcon } from './ProfileIcon';
import { SearchIcon } from './SearchIcon';
import { UploadIcon } from './UploadIcon';
import { UploadIcon2 } from './UploadIcon2';

interface Props {
  className?: string;
}
/* @figmaId 69:1243 */
export const AmazonTips: FC<Props> = memo(function AmazonTips(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle23}></div>
      <div className={classes.prepForInterview}>Prep for interview</div>
      <div className={classes.useKeywordsAndPhrasesThatExpre}>
        <ul className={classes.list}>
          <li>
            <div className={classes.textBlock}>
              Use keywords and phrases that express your knowledge of the job position{' '}
            </div>
          </li>
          <li>
            <div className={classes.textBlock2}>
              Prepare for a online assessment,do leetcode, hacker rank and hackON with amazon for pratice
            </div>
          </li>
          <li>
            <div className={classes.textBlock3}>get projects or codes related to data transfer </div>
          </li>
        </ul>
      </div>
      <div className={classes.workstyleAssessmentBeforeGoing}>
        <div className={classes.textBlock4}> Workstyle assessment</div>
        <ul className={classes.list2}>
          <li>
            <div className={classes.textBlock5}>
              <p className={classes.labelWrapper}>
                <span className={classes.label}>
                  before going into the assessment think about your work style and how you might approach the problem,
                  be ready to talk through your thinking process
                </span>
              </p>
            </div>
          </li>
        </ul>
        <div className={classes.textBlock6}>
          <p className={classes.labelWrapper2}></p>
        </div>
        <div className={classes.textBlock7}>
          <p className={classes.labelWrapper3}>
            <span className={classes.label2}> technical Interview </span>
          </p>
        </div>
        <ul className={classes.list3}>
          <li>
            <div className={classes.textBlock8}>
              <p className={classes.labelWrapper4}>
                <span className={classes.label3}>
                  Practice different data structures and understand the inner workings along with runtime{' '}
                </span>
              </p>
            </div>
          </li>
          <li>
            <div className={classes.textBlock9}>practice algorithms and coming up with different ones on the spot</div>
          </li>
        </ul>
      </div>
      <div className={classes.tabBar}>
        <div className={classes.background}>
          <div className={classes.background2}></div>
          <div className={classes.home}>
            <HomeIcon className={classes.icon} />
          </div>
          <div className={classes.search}>
            <SearchIcon className={classes.icon2} />
          </div>
          <div className={classes.upload}>
            <UploadIcon className={classes.icon3} />
          </div>
          <div className={classes.chat}>
            <ChatIcon className={classes.icon4} />
          </div>
          <div className={classes.profile}>
            <ProfileIcon className={classes.icon5} />
          </div>
          <div className={classes.upload2}>
            <UploadIcon2 className={classes.icon6} />
          </div>
        </div>
        <div className={classes.shape}></div>
      </div>
      <div className={classes.whenGettingReadyToApplyForJobs}>
        <div className={classes.textBlock10}>
          When getting ready to apply for jobs at amazon it is important to keep a couple of things in mind before
          sending off your resume!{' '}
        </div>
        <div className={classes.textBlock11}>
          <p></p>
        </div>
        <div className={classes.textBlock12}>
          With the job that you are applying to tailor your resume according to the potion listed
        </div>
      </div>
    </div>
  );
});
