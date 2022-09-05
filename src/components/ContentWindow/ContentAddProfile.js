import { Box, Heading, Button, Form, FormField, TextInput, FileInput } from 'grommet';

export function ContentAddProfile() {
  return (
    <Form>
      <Box margin='small' overflow='auto'>
        <Heading>增加主体信息</Heading>
        <Box>
          <Heading level={3}>主办单位</Heading>
          <FormField label='主体名称'>
            <TextInput />
          </FormField>
          <FormField label='营业执照'>
            <FileInput />
          </FormField>
          <FormField label='统一社会信用代码'>
            <TextInput />
          </FormField>
          <FormField label='住所'>
            <TextInput />
          </FormField>
        </Box>
        <Box>
          <Heading level={3}>负责人</Heading>
          <FormField label='姓名'>
            <TextInput />
          </FormField>
          <FormField label='上传身份证照片面'>
            <FileInput />
          </FormField>
          <FormField label='上传身份证国徽面'>
            <FileInput />
          </FormField>
          <FormField label='身份证号码'>
            <TextInput />
          </FormField>
          <FormField label='手机号码'>
            <TextInput />
          </FormField>
          <FormField label='电子邮箱'>
            <TextInput />
          </FormField>
          <Box direction='row'>
            <Button label='提交' primary type='submit' />
          </Box>
        </Box>
      </Box>
    </Form>
  );
}