# readme do Alan.

## Códigos e explicações :)

- [GitHub do Alan](https://github.com/Waliwe/Curso)

- [Como descobrir a senha do wifi pelo cmd](https://g1.globo.com/economia/tecnologia/blog/ronaldo-prass/post/2019/04/14/como-descobrir-a-senha-do-wi-fi-salva-no-windows.ghtml)
Digite cmd na busca do Windows para localizar o Prompt de Comando.
Digite o comando "netsh wlan show profiles" e tecle enter para a execução.
Serão exibidas todas as redes que foram acessadas e salvas no PC.
Digite o comando "netsh wlan show profile name=profilename key=clear," mas antes substitua o argumento 'profilename' pelo nome da rede sem fio que desejar visualizar a senha salva, e após tecle 'ENTER'.
Serão exibidas algumas informações correspondentes a rede sem fio, identifique as configurações de segurança e localize o campo 'Conteúdo da Chave'. O valor associado a essa chave corresponde a senha de acesso para a rede Wi-Fi.
