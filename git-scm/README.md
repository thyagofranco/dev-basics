GIT-SCM
=======




### git init 
Inicia um repositório no diretório atual

### git add [arquivo]
Adiciona um arquivo para área de stage, e quando estiver satisfeito com as mudanças, faz o commit

### git commit 
Cria um novo commit contendo as novas alterações feitas no arquivo.

### git remote add origin http......
Adiciona um novo repositório remoto

### git push -u origin master
Envia os commits da minha branch master, para o repositório remoto 

### git status

### git log 
Mostra todos os commits que tiveram push


### git branch 
Listas as Branchs   
Quando uma branch nova é criada, todos os arquivos que estão na branch master são clonados para a nova branch.
### git branch [nome branch]
Cria uma branch

### git checkout [nome branch]
Troca o HEAD para a branch [nome branch]

### git checkout -b [nome branch]
Cria uma branch nova e troca o HEAD para a branch [nome branch]

### git checkout -- [nome do arquivo]
Desfaz as alterações em um arquivo


### git branch -D [nome branch]
Deleta uma branch [nome branch]

### git push --set-upstream origin [nome branch]
### git push origin <nome branch>.
Envia uma branch para o repositório remoto


### git merge [nome branch]
Mescla alterações de uma branch, a branch ativa no HEAD.
Ex: 
git checkout master
git merge newfeature





### git tag 1.0 <insert-commitID-here>
A marcação é usada para marcar compromissos específicos com alças simples. Um exemplo pode ser:

### git reset HEAD [nome do arquivo]
Tirar um arquivo de stage, após ter dado git add

### git diff [nome do arquivo]
Verifica alterações feitas no arquivo.

### git commit --amend
Altera a mensagem do último commit