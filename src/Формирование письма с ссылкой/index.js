function sendEmailsSeparate_(emailCount, arrEmails, subject, logoImage, arrName, raspisanie, mailTo, regMoodle) {
  var sendEmailCount = 0;
  for (var i = 0; i < emailCount; i++) {
    MailApp.sendEmail({
      to: arrEmails[i],
      subject: subject,
      htmlBody:
        "<img src='cid:logoImage'>" +
        '<h1> Уважаемый(ая) ' +
        arrName[i] +
        '! </h1>' +
        /*
      " - Имя таблицы: " + tableName + "<br>" +
      " - Количество Email в списке: " + emailCount + "<br>" +
      " - Текущее дата-время: " + new Date() + "<br>" +
      */
        '<h2> Поздравляем! Вы успешно прошли входной контроль на программу Сетевого ИТ-Университета «' +
        subject +
        '» , реализуемую в ПНИПУ. <br><br>' +
        ' Занятия будут проходить в соответствии с расписанием (время пермское): </h2>' +
        '<h3>' +
        raspisanie +
        '</h3>' +
        '<h2> Видеозаписи курса будут доступны по адресу вебинарной площадки. </h2><br>' +
        mailTo +
        '<h2> Для публикации домашних работ необходимо зарегистрироваться Moodle. </h2>' +
        '<h3>' +
        regMoodle +
        '</h3><br>' +
        '<h2> -- <br>' +
        'С пожеланиями побед, <br>' +
        'творческого и профессионального роста! </h2>',
      inlineImages: {
        logoImage,
      },
    });
    sendEmailCount++;
  }
  return sendEmailCount;
}

function runTest() {
  const subject = 'Это какая-то тема';
  const mailTo =
    '<a href="mailto:ccmpmtpnrpu@gmail.com?subject=' +
    encodeURIComponent(subject + ' ' + new Date().getTime()) +
    '&body=TRUE">Кликните здесь, чтоб ответным письмом подтвердить Ваше желание обучаться на данной программе</a> ';
  const arrEmails = ['test@gmail.test'];
  const emailCount = arrEmails.length;
  const arrName = ['TEST'];
  const raspisanie = 'raspisanie';
  const regMoodle = 'regMoodle';
  const logoImage = DriveApp.getFileById('1iYDMdnOT3vnvAUNHUXK9-bsQtnMqnUZi');
  sendEmailsSeparate_(emailCount, arrEmails, subject, logoImage, arrName, raspisanie, mailTo, regMoodle);
}
