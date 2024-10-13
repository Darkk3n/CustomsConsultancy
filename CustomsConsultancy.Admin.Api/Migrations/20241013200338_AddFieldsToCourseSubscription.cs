using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CustomsConsultancy.Admin.Api.Migrations
{
    /// <inheritdoc />
    public partial class AddFieldsToCourseSubscription : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PaymentMethod",
                table: "CourseClients",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "PersonOrCompanyName",
                table: "CourseClients",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PostalCode",
                table: "CourseClients",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "RequiresInvoice",
                table: "CourseClients",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Rfc",
                table: "CourseClients",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "TaxPayerEmail",
                table: "CourseClients",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "TaxRegime",
                table: "CourseClients",
                type: "INTEGER",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PaymentMethod",
                table: "CourseClients");

            migrationBuilder.DropColumn(
                name: "PersonOrCompanyName",
                table: "CourseClients");

            migrationBuilder.DropColumn(
                name: "PostalCode",
                table: "CourseClients");

            migrationBuilder.DropColumn(
                name: "RequiresInvoice",
                table: "CourseClients");

            migrationBuilder.DropColumn(
                name: "Rfc",
                table: "CourseClients");

            migrationBuilder.DropColumn(
                name: "TaxPayerEmail",
                table: "CourseClients");

            migrationBuilder.DropColumn(
                name: "TaxRegime",
                table: "CourseClients");
        }
    }
}
