As a web dev you really don't have to know much 
bash but its really a great time saver when you get good at it

also the more senior you get - the more you'll have to interact with docker
and to write docker you will need to know some bash.

## Note to reader
I use fd and ripgrep instead of find and grep. Fd and ripgrep are rust rewrites
of those unix commands they work the same but they respect gitignores by default
and tend to be faster and easier to use in my experience. but this is my bias


# Bash

### Hello world
```sh 
echo "Hello world"
```
this prints hello world - not that you'll do much printing in bash
but you know prototypical start and all


### Take arg
```sh
echo $1
```
This prints the argument you pass it. So imagine its in a file called reprint.sh 
```sh
./reprint.sh hello
```
prints hello.

### Use ripgrep
Ripgrep is 99% of what i use bash for - its used to find text in files.
```sh
rg "function thing" .
```
searches for the string "function thing" in the directory "." which is just the current directory you are in. This works exactly like the vscode search tool (which does support regex!) the core difference is ripgrep respects your gitignore so is much faster by default - but it will not search those files!

### Options
Here are all the options I have used in my plentiful use - not saying you won't need more but like these are core imo.
* -l  -- this is to show the filenames only not the actual match
* --no-filename -- this is the opposite
* -v -- this inverse the match (find everything that doesn't satisify my regex)
* -i -- ignore case
* -g -- pass a glob like -g '*{js,ts}' - only look in these files, it is comma not delineated - spaces are meaingful 
* --only-matching - only show the parts that are in red by default - this wll make sense after you run it:)

### Composability
In bash you can send the output of one command to the next using "|" operator - here would be a common use.

```sh
rg "common\.thing" -l | rg -v i18n
```
This would show me all files where "common.thing" is written and the file path doesn't have "i18n" in it - things like this can be very useful.

### Horrible windows jank
Note on windows filepaths comeback as "\\" paths. This is horrible you end up having to do 4 backslashes to represent one - giant pain but good to be aware. 


### xargs
Using xargs we can take composing to the next level. Xargs lets us take take the output of one command and send it to the next in a more composable way. ***Here is a program you should not run***
```sh
rg "badString" -l | xargs rm -rf $1
```
This will forcifully and recursively remove all files and folders beginning in the current directory where "badString" exists. 


### fd

I use fd much less than rg but its basically faster ctrl P in vscode - it can be useful in large repos:).
```sh
fd hello
```
find all files and folders with hello in the name
