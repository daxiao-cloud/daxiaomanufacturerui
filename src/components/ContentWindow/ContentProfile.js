import { Box, Heading, Button, Text, CheckBox, Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';
import { Add, LinkPrevious } from 'grommet-icons';
import Link from 'next/link';
import React from 'react';

export function ContentProfile() {
  const [verified, setVerified] = React.useState(false);
  return (
    <Box margin='small' overflow='auto'>
      <Box direction='row' gap='small'>
        <Heading>企业认证</Heading>
        <CheckBox label='测试：是否已认证' onChange={event => setVerified(event.target.checked)} />
      </Box>
      {verified && <Box direction='row' pad='small'>
        <Button icon={<Add />} label='开始企业认证' />
      </Box>}
      {!verified && <Box>
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
          <Button label='主体详情' />
          <Button label='变更主体' />
        </Box>
      </Box>}
    </Box>
  );
}