// Función constructora Paciente
function Paciente(nombre, edad, rut, diagnostico) {
    this._nombre = nombre;  // atributo privado con prefijo _
    this._edad = edad;
    this._rut = rut;
    this._diagnostico = diagnostico;
}

  // Función constructora Consultorio
function Consultorio(nombre, pacientes = []) {
    this._nombre = nombre;
    this._pacientes = pacientes;  // lista de pacientes
}

Paciente.prototype.getNombre = function() {
    return this._nombre;
};

Paciente.prototype.setNombre = function(nombre) {
    this._nombre = nombre;
};

Paciente.prototype.getEdad = function() {
    return this._edad;
};

Paciente.prototype.setEdad = function(edad) {
    this._edad = edad;
};

Paciente.prototype.getRut = function() {
    return this._rut;
};

Paciente.prototype.setRut = function(rut) {
    this._rut = rut;
};

Paciente.prototype.getDiagnostico = function() {
    return this._diagnostico;
};

Paciente.prototype.setDiagnostico = function(diagnostico) {
    this._diagnostico = diagnostico;
};
    
//aquí se buscan los pacientes
Consultorio.prototype.buscarPacientePorNombre = function(nombre) {
    const pacienteEncontrado = this._pacientes.find(paciente => paciente.getNombre() === nombre);
    if (pacienteEncontrado) {
      console.log("Paciente encontrado:");
      console.log(`Nombre: ${pacienteEncontrado.getNombre()}, Edad: ${pacienteEncontrado.getEdad()}, RUT: ${pacienteEncontrado.getRut()}, Diagnóstico: ${pacienteEncontrado.getDiagnostico()}`);
    } else {
      console.log("Paciente no encontrado.");
    }
  };
  
//aqui se muestran todos los pacientes
  Consultorio.prototype.mostrarPacientes = function() {
    console.log(`Consultorio: ${this._nombre}`);
    this._pacientes.forEach(paciente => {
      console.log(`Nombre: ${paciente.getNombre()}, Edad: ${paciente.getEdad()}, RUT: ${paciente.getRut()}, Diagnóstico: ${paciente.getDiagnostico()}`);
    });
  };

// instancias para los pacientes
const paciente1 = new Paciente("Roberto Gomez", 15, "12345678-9", "le duele el ojito");
const paciente2 = new Paciente("Capitan Panqueque", 80, "98765432-1", "dolor de barriguita");

// genera una instancia de consultorio con los pacientes
const consultorio = new Consultorio("Consultorio Central", [paciente1, paciente2]);

// Mostrar todos los pacientes
consultorio.mostrarPacientes();

// Buscar un paciente por nombre
consultorio.buscarPacientePorNombre("Capitan Panqueque");