import { Box, Heading, Button, CheckBox, Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';
import Link from 'next/link';
import React from 'react';

export function ContentEnterprise() {
  const [verified, setVerified] = React.useState(false);
  return (
    <Box margin='small' overflow='auto'>
      <CheckBox label='测试：是否已认证' onChange={event => setVerified(event.target.checked)} />
      <Heading>企业认证</Heading>
      {!verified && <Box direction='row' pad='small'>
        <Link href='/enterprise/addProfile'><Button label='开始企业认证' /></Link>
      </Box>}
      {verified && <Box>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell border scope='col'>主办单位</TableCell>
              <TableCell border scope='col'>单位负责人</TableCell>
              <TableCell border scope='col'>手机号码</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell border>上海大晓智能科技有限公司</TableCell>
              <TableCell border>张xx</TableCell>
              <TableCell border>1382482934</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Box direction='row' pad='small' gap='small'>
          <Link href='/enterprise/profile'><Button label='主体详情' /></Link>
          <Link href='/enterprise/addProfile'><Button label='变更主体' /></Link>
        </Box>
      </Box>}
    </Box>
  );
}