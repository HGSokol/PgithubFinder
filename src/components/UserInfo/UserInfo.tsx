import { InfoItemProps, InfoItem } from 'components/InfoItem';
import { LocalGithubUser } from 'type';
import styles from './UserInfo.module.scss';

import {ReactComponent as CompanyIcon} from 'assets/icon-company.svg'
import {ReactComponent as LocationIcon} from 'assets/icon-location.svg'
import {ReactComponent as TwitterIcon} from 'assets/icon-twitter.svg'
import {ReactComponent as BlogIcon} from 'assets/icon-website.svg'

interface UserInfoProps extends Pick<
  LocalGithubUser,
  'company' | 'blog' | 'location' | 'twitter'
>{}

export const UserInfo = ({blog, company, location, twitter }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon/>,
      text: location,
    },  
    {
      icon: <BlogIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
      isLink: true,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    }, 
  ]

  return(
  <div className={styles.userInfo}>
    {
    items.map((e,i) => (
      <InfoItem {...e} key={i} />
    ))
    }
  </div>
  )
}

export default UserInfo;
