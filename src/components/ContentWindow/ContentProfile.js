import { Box, Heading, Text, CheckBox, Table, TableHeader, TableBody, TableRow, TableCell } from 'grommet';
import { Add } from 'grommet-icons';

export function ContentProfile() {
  return (
    <Box margin='small' overflow='auto'>
      <Heading>主体信息</Heading>
      <Box>
        <Heading level={3}>主办单位</Heading>
        <Text>主体名称：上海大晓智能科技有限公司</Text>
        <Text>证件类型：营业执照</Text>
        <Text>证件号码：91310000MA1H386U6J</Text>
        <Text>证件住所：上海市闵行区申昆路2377号1幢301b、302、303、304室</Text>
      </Box>
      <Box>
        <Heading level={3}>负责人</Heading>
        <Text>负责人：张xx</Text>
        <Text>证件类型：身份证</Text>
        <Text>证件号码：32077349831122381Z</Text>
        <Text>手机号码：13874630183</Text>
        <Text>电子邮箱：hxxxxxxg.zhang@outlook.com</Text>
      </Box>
    </Box>
  );
}