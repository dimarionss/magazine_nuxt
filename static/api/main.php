<?php
$host = 'localhost';
$dbname = 'magazine';
$username = 'root';
$password = '';
try {
  $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password, array(
    PDO::ATTR_PERSISTENT => true
  ));
} catch (PDOException $e) {
  print "Error!: " . $e->getMessage() . "<br/>";
  die();
}

header('Content-type: application/json; charset=utf-8');
$rawPaylaod = file_get_contents('php://input');

try {
  $payload = json_decode($rawPaylaod, true);
} catch (Exception $e) {
  die(json_encode(['error' => 'Payload problem.']));
}

echo json_encode([
  'echo' => $payload,
]);

if (isset($_POST['email']) && $_POST['email'] && isset($_POST['password']) && $_POST['password']) {
  return json_encode(array('success' => 1));
  // $result = $conn->query('SELECT * FROM users');
  // foreach ($result as $row) {
  //   $username = $row["email"];
  //   $password = $row["password"];
  //   $role = $row["role"];
  //   if (($_POST['email'] === $username) && ($_POST['password'] === $password)) {
  //     return json_encode(array('success' => true));
  //   }
  // }
} else {
  return json_encode(array('success' => 0));
}
