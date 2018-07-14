//in order to create a hidden file "." should be used before the file name 
Last login: Sun Jul 15 04:22:33 on ttys001
ayses-mbp:~ ayse$ cd documents
ayses-mbp:documents ayse$ cd hyf
ayses-mbp:hyf ayse$ touch .hidden.txt

ayses-mbp:hyf ayse$ touch .hiddentext.txt

// "ls-a" is used to show hidden files
ayses-mbp:hyf ayse$ ls -a
.		.DS_Store	.hiddentext.txt	hyf-javascript1
..		.hidden.txt	HTML-CSS


//  "mkdir -p" to create multiple nested directories.

ayses-mbp:hyf ayse$ mkdir -p these/folders/are/fun
ayses-mbp:hyf ayse$ cd these
ayses-mbp:these ayse$ ls
folders
ayses-mbp:these ayse$ cd are
-bash: cd: are: No such file or directory
ayses-mbp:these ayse$ cd folders
ayses-mbp:folders ayse$ ls
are
ayses-mbp:folders ayse$ cd are
ayses-mbp:are ayse$ ls
fun


// part 3 exucute commands and verify number

ayses-mbp:are ayse$ cd fun
ayses-mbp:fun ayse$ touch fun.txt
ayses-mbp:fun ayse$ echo > fun.txt
ayses-mbp:fun ayse$ echo "test" > fun.txt
ayses-mbp:fun ayse$ echo "another test" >> fun.txt
ayses-mbp:fun ayse$ wc -c fun.txt
      18 fun.txt
      
      
// to append something in the file *WITHOUT* a newline character.

ayses-mbp:fun ayse$ echo -n "without" >>fun.txt
ayses-mbp:fun ayse$ echo -n "without" >> fun.txt
ayses-mbp:fun ayse$ echo -n "newline" >> fun.txt
ayses-mbp:fun ayse$ cat fun.txt
test
another test
ayses-mbp:fun ayse$ cat fun.txt
test
another test
withoutwithoutnewlineayses-mbp:fun ayse$ 


