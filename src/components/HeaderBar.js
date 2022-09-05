import { Box, Header, Select, Menu, Button } from 'grommet';
import { Device, User, Logout, Certificate } from 'grommet-icons';
import Link from 'next/link';

export function HeaderBar() {
  return (
    <Header background='brand' pad='small'>
      <Box direction='row' gap='medium' align='center'>
        <Link href='/'>
          <Button plain icon={<Device />} label='大晓设备制造商平台' />
        </Link>
      </Box>
      <Select options={['简体中文', 'English']} value='简体中文' />
      <Menu label={<User />} items={[
        {label: <Link href='/enterprise'><Button plain label='企业认证' /></Link>, icon: <Certificate />, gap: 'small'},
        {label: '退出登录', icon: <Logout />, gap: 'small'},
      ]} />
    </Header>
  );
}
