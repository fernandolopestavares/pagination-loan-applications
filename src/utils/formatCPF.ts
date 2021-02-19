function formatCPF(cpf: string): string {
  const formattedCPF = cpf.replace(
    /(\d{3})(\d{3})(\d{3})(\d{2})/,
    (_, arg1, arg2, arg3, arg4) => {
      return `${arg1}.${arg2}.${arg3}-${arg4}`;
    },
  );

  return formattedCPF;
}

export default formatCPF;
