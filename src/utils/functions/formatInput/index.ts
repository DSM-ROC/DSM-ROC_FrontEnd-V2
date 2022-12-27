export const formatInput = (value: string, name: string): string => {
  if (name === 'email') {
    return value
      .replace(/[^A-Za-z0-9.@]/g, '')
      .replace(/@{2,}/, '@')
      .replace(/(\.{2,})/g, '.');
  }
  if (name === 'password') {
    return value.replace(/[^A-Za-z\d@$!%*#?&]/g, '');
  }
  if (name === 'nickname') {
    return value.replace(/[^ㄱ-ㅎ가-힣A-Za-z0-9]/g, '');
  }

  throw new Error('알 수 없는 name');
};
