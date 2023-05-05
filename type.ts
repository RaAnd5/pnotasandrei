// Se declara objeto Usuario
function Usuario(DNI, Nombre, Apellidos, usuario, contraseña, foto, Direccion, telefono) {
    this.DNI = DNI;
    this.Nombre = Nombre;
    this.Apellidos = Apellidos;
    this.usuario = usuario;
    this.foto = foto;
    this.Direccion = Direccion;
    this.telefono = telefono;
    this.cursos = []; // arreglo de cursos matriculados
  }
  
  Usuario.prototype.addCurso = function(curso) {
    this.cursos.push(curso);
  };
  
  
  Usuario.prototype.getNotas = function(cursoNombre, asignaturaId) {
    var notas = [];
    this.cursos.forEach(function(curso) {
      if (curso.Nombre === cursoNombre) {
        curso.nota.forEach(function(nota) {
          if (nota.id_alumno === this.usuario && nota.id_asignatura === asignaturaId) {
            notas.push(nota.nota);
          }
        }, this);
      }
    }, this);
    return notas;
  };
  
  
  var jperez = new Usuario('12345678A', 'Juanin', 'Pérez García', 'jperez', 'secreta123', 'https://ejemplo.com/foto.jpg', 'Calle Falsa 123', '555-1234');
  var CaPepin = new Usuario('12333333A', 'Pepin', 'Calatraba Eljefe', 'CaPepin', 'secreta124', 'https://ejemplo.com/foto.jpg', 'Calle Falsa 345', '222-988');
  var Topillo = new Usuario('99999999A', 'Carlin', 'Eltopo Gonzalez', 'Topillo', 'secreta666', 'https://ejemplo.com/foto.jpg', 'Calle Falsa 111', '899-000');
  
  
  
  
  
  
  // Se declara objeto Curso
  function Curso(Nombre, id_a1, id_a2) {
    this.Nombre = Nombre;
    this.id_a1 = id_a1;
    this.id_a2 = id_a2;
    this.nota = []; // arreglo de notas de las asignaturas en este curso
  }
  
  Curso.prototype.addNota = function(nota) {
    this.nota.push(nota);
  };
  
  var CursoIA = new Curso('Programador IA', 'Python', 'JavaScript');
  var CursoDali = new Curso('Diseño Gráfico', 'Photoshop', 'Illustrator');
  
  
  
  
  
  
  
  // Se declara objeto Nota
  function Nota(id_alumno, id_asignatura, id_curso, nota) {
    this.id_alumno = id_alumno;
    this.id_asignatura = id_asignatura;
    this.id_curso = id_curso;
    this.nota = parseFloat(nota);
  }
  
  var JuaninNotas1 = new Nota('jperez', 'Python', 'Programador IA', '7.8');
  var PepinNotas2 = new Nota('CaPepin', 'JavaScript', 'Programador IA', '8.3');
  var CarlinNotas3 = new Nota('Topillo', 'Photoshop', 'Diseño Gráfico', '9.1');
  var CarlinNotas4 = new Nota('Topillo', 'Photoshop', 'Diseño Gráfico', '9.1');
  
  
  
  // Agregar cursos al usuario
  jperez.addCurso(CursoIA);
  CaPepin.addCurso(CursoDali);
  Topillo.addCurso(CursoIA);
  Topillo.addCurso(CursoDali);
  
  
  
  // Agregar notas a los cursos
  CursoIA.addNota(JuaninNotas1);
  CursoDali.addNota(PepinNotas2);
  CursoIA.addNota(CarlinNotas3);
  CursoDali.addNota(CarlinNotas4);
  
  
  
  
  
  //FUNCIONES MOSTRAR INFO
  
  
  function mostrarInformacion(usuario, curso, nota) {
    console.log('Datos del usuario:');
    console.log('DNI:', usuario.DNI);
    console.log('Nombre:', usuario.Nombre);
    console.log('Apellidos:', usuario.Apellidos);
    console.log('Usuario:', usuario.usuario);
    console.log('Curso matriculado:', curso.Nombre);
    console.log('Notas de las asignaturas:');
    console.log(curso.id_a1, nota.id_alumno === usuario.usuario ? nota.nota : 'sin nota');
    console.log(curso.id_a2, nota.id_alumno === usuario.usuario ? nota.nota : 'sin nota');
  }
  
  // Ejemplo de uso
  mostrarInformacion(jperez, CursoIA, JuaninNotas1);
  mostrarInformacion(CaPepin, CursoIA, PepinNotas2);
  mostrarInformacion(Topillo, CursoIA, CarlinNotas3);
  mostrarInformacion(Topillo, CursoDali, CarlinNotas4);