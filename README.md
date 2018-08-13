# vue-work

git 操作(1)
	
	git clone url
	
	coding over 
	
	git add .
	
	git commit -m "zhushi"
	
	git push origin master (分支名称)
	

把本地代码和服务器代码做何必

	git pull orgin master
	
基于master创建分支daily/1.0.0

	git checkout -b daily/1.0.0
	
> -b 表示第一次创建分支，他会把当前目录下的代码自动复制到你要创建的分支中去。

此时在daily分支上修改代码，完成以后。需要提交代码到daily分支。

此时daily分支代码为最新代码，master代码为老代码。(验证代码无误的情况下，需要把daily分支代码合并到master上去。)
	
	合并步骤
	 1. git checkout master    //切换到master分支上
	 2. git pull orgin master   //如果有多人开发，需要执行  
	 2. git merge daily/1.0.0  //把daily分支代码合并到当前目录
	 3. 验证master代码无误后，执行提交代码即可。(add/commit/push)
	 
#git 添加tag 
git tag -a v3.5 -m "新增功能pdf导出，设备名称"
git push origin --tags
#git 删除tag
git tag -d V1.2 

ssh-keygen生成 sshkey
$ cat /c/Users/admin/.ssh/id_rsa.pub 查看ssh命令

git add src/index.ejs 单个添加某一个文件
git commit -m ""
git push
