import { Button, DropdownMenu, Icon } from '@gravity-ui/uikit';
import styles from './HeaderDropDownMenu.module.scss';
import { Person } from '@gravity-ui/icons';
import { DropdownMenuItem } from '@gravity-ui/uikit/build/esm/components/DropdownMenu/DropdownMenuItem';
import { Form, Link, useNavigate } from 'react-router-dom';
import { IUser } from '../../../types/IUser';
import { UserType } from '../../../types/UserType';
import HeaderDropDownMenuOrganizer from './HeaderDropDownMenuOrganizer';

interface IHeaderDropDownMenuProps {
  user: IUser
}
const HeaderDropDownMenu = ({ user }: IHeaderDropDownMenuProps) => {

  return (
    <div className={styles.menu}>
      <DropdownMenu
        renderSwitcher={(props) => (
          <div {...props} className={styles.profileLink}>
            <Icon data={Person} size={30} className={styles.profileSvg} />
          </div>
        )}
      >
        <div className={styles.menuContent}>
          {
            user.userType == UserType.Organizer ? (
              <HeaderDropDownMenuOrganizer id={user.id}/>
            ) : (
              <></>
            )
          }
          <div className={styles.navItem}>
            <Form method='POST' action='logout'>
              <button type='submit'>
                Выйти
              </button>
            </Form>
          </div>
        </div>
      </DropdownMenu>
    </div>
  );
};

export default HeaderDropDownMenu;