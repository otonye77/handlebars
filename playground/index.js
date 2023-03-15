// const findProcesses = (startItem, endItem, tasks) => {
//   const graph = {};
//   for (const task of tasks) {
//     console.log(task);
//     const [process, from, to] = task.split(":");
//     if (!graph.hasOwnProperty(from)) {
//       graph[from] = [];
//     }
//     graph[from].push({ process, to });
//   }
//   const queue = [{ node: startItem, path: [] }];
//   const visited = new Set([startItem]);

//   while (queue.length > 0) {
//     const { node, path } = queue.shift();

//     if (node === endItem) {
//       return path;
//     }

//     if (!graph.hasOwnProperty(node)) {
//       continue;
//     }

//     for (const { process, to } of graph[node]) {
//       if (!visited.has(to)) {
//         queue.push({ node: to, path: [...path, process] });
//         visited.add(to);
//       }
//     }
//   }

//   return [];
// };

const findProcesses = (startItem, endItem, tasks) => {
  const graph = {};
  for (const task of tasks) {
    const [process, from, to] = task.split(":");
    if (!graph.hasOwnProperty(from)) {
      graph[from] = [];
    }
    graph[from].push({process, to})
  }
  console.log(graph);
};

console.log(
  findProcesses("field", "bread", [
    "gather:field:wheat",
    "bake:flour:bread",
    "mill:wheat:flour",
  ])
);
// "field"	"bread"	["gather:field:wheat","bake:flour:bread","mill:wheat:flour"]	["gather","mill","bake"]
// "field"	"ferrari"	["gather:field:wheat","bake:flour:bread","mill:wheat:flour"]	[]
// "field"	"field"	["gather:field:wheat","bake:flour:bread","mill:wheat:flour"]	[]

// This challenge requires you to create a solution only based on the input and output to your function.

// The examples below show you how to write function accum:

// Examples:

// Input String	Output String
// "abcd"	"A-Bb-Ccc-Dddd"
// "RqaEzty"	"R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// "cwAt"	"C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// function accum(s) {
//   let result = '';
//   for (let i = 0; i < s.length; i++) {
//     result += s[i].toUpperCase();
//     for (let j = 0; j < i; j++) {
//       result += s[i].toLowerCase();
//     }
//     if (i < s.length - 1) {
//       result += '-';
//     }
//   }
//   return result;
// }

function accum(s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    result += s[i].toUpperCase();
  }
}
console.log(accum("abcd"));
